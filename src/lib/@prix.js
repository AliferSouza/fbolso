const root = document.querySelector("#app");
let PagesComponentsDataArray
let lastFetchTime = 0;

const componentCache = {};
const functionEvent = {};


function on(event, cb) {
  const nameFunction = event.name || event;
  if (nameFunction.includes("comp")) {
    const kebabCaseName = nameFunction
      .replace(/([a-zA-Z])(?=[A-Z])/g, "$1-")
      .toLowerCase();
    if (!PagesComponentsDataArray.Components.hasOwnProperty(kebabCaseName)) {
      PagesComponentsDataArray.Components[kebabCaseName] = cb || event;
    }
  }

  if (typeof event === "function") {
    const nameFunction = event.name;
    if (!functionEvent[nameFunction]) {
      functionEvent[nameFunction] = [event];
    } else if (!functionEvent[nameFunction].includes(event)) {
      functionEvent[nameFunction].push(event);
    }
  } else {
    if (!functionEvent[event]) {
      functionEvent[event] = [cb];
    } else if (!functionEvent[event].includes(cb)) {
      functionEvent[event].push(cb);
    }
  }
}

function emit(event, ...args) {
  if (functionEvent[event]) {
    const values = functionEvent[event]
      .map((cb) => cb(...args))
      .filter((result) => result !== undefined);
    return values.length > 0 ? values : "";
  }
  return "";
}

async function useNavigate(Rota, props) {
  const normalizedPath = `/${Rota.replace(/^\/+|\/+$/g, "")}`;
  const fullPath = `#${normalizedPath}`;

  // Verifica se a URL realmente mudou antes de chamar a função Router
  if (fullPath !== window.location.hash) {
    window.history.pushState(null, null, fullPath);

    if (props) {
      await Router(props);
    } else {
      await Router();
    }
  } else {

    await Router(props);
  }
}

let urlRevalidateComponent;
const intervalMap = new Map();
const reloadComp = (element) => {
  if (element.tagName.includes("-")) {

    const verificarUse = () => {
      const use = element.hasAttribute("use:revalidate");
      const useValue = element.getAttribute("use:revalidate") || 1000;
      return [use, useValue];
    };

    const [use, useValue] = verificarUse();

    if (use) {
      const reload = async () => processElement(element);
      const intervalId = setInterval(reload, useValue);
      intervalMap.set(element.tagName.toLowerCase(), intervalId);
      urlRevalidateComponent = location.href;
    } else {
      const tagNameLowerCase = element.tagName.toLowerCase();
      const intervalId = intervalMap.get(tagNameLowerCase);

      if (intervalId) {
        clearInterval(intervalId);
        intervalMap.delete(tagNameLowerCase);
      } else {
        if ((urlRevalidateComponent === location.href) === false) {
          intervalMap.clear();
        }
      }
    }
  }
}

const pagesComponentsFetch = async (props) => {
  const { tag, Data } = props;
  const componentKey = tag.tagName.toLowerCase();

  const verificarFetch = () => {
    const [fetchValue, htmljs] = (tag.getAttribute("use:fetch") || "")
      .split("|")
      .map((str) => str.trim());
    return [fetchValue, htmljs];
  };
  const [fetchValue, htmljs] = verificarFetch();

  let Resultcomponent;
  let htmlFunction;
  let response;

  if (componentCache[componentKey]) {
    Resultcomponent = await componentCache[componentKey](Data);
  } else {
    const url = `${location.origin}/${fetchValue}/${componentKey}.${htmljs}`; 
    response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch page content");
    }

    if (htmljs === "html") {
      document.querySelector(componentKey).innerHTML = await response.text();
    }

    if (htmljs === "js") {
      htmlFunction = await response.text(); 
      Resultcomponent = Function("return " + htmlFunction)();    
      tag.innerHTML = Resultcomponent(Data)
      componentCache[componentKey] = Resultcomponent;
    }
  }

}

const processElement = async (elem, render) => {
  const { Components = {}, Data = {} } = PagesComponentsDataArray;

  const elemName = elem.tagName.toLowerCase();
  const isFetch = elem.hasAttribute("use:fetch");
  const revalidate = elem.hasAttribute("use:revalidate");

  const componentResult = await (isFetch
    ? pagesComponentsFetch({ tag: elem, Data })
    : Components[elemName]({ tag: elem, Data }));

  elem.innerHTML = revalidate || render ? componentResult : elem.innerHTML + componentResult;
  emit(elemName);

  await Promise.all(
    Array.from(elem.querySelectorAll("*")).map(async (element) => {
      if (element.tagName.includes("-") && element.tagName.toLowerCase() !== elemName) {
        await processElement(element);
        reloadComp(element);
      }
    })
  );
};

async function customTags() {

  const tagElementsObserve = Array.from(document.querySelectorAll("*")).filter(
    (element) => {
      const hasHyphen = element.tagName.includes("-");
      const hasPriority = element.hasAttribute("priority");

      if (hasHyphen) {
        if (hasPriority) {
          processElement(element);
        } else {
          return element;
        }
      }
    }
  );

  const observerTagsDom = (() => {
    const processed = new Set();
    const observer = new IntersectionObserver(async (entries, obs) => {
      const e = entries.find((e) => e.isIntersecting);
      if (e) {
        const { target } = e;
        await processElement(target);
        reloadComp(target);
        obs.unobserve(target);
        const next = tagElementsObserve.find((tag) => !processed.has(tag));
        if (next) processed.add(next) && obs.observe(next);
      }
    });

    const first = tagElementsObserve.find((tag) => !processed.has(tag));
    if (first) processed.add(first) && observer.observe(first);
  })();
}

function debounce(fn, delay) {
  let timeoutId; 
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const Router = async (PagesComponentsDataConfig = {}) => {
    PagesComponentsDataArray = PagesComponentsDataConfig
  const { Pages = {}, Data = {}} = PagesComponentsDataArray

  async function routerPages() {
    const match = location.href.match(/#\/([^\/?]+)/);
    const currentPathUrl = match ? match[1] : null;

    if (!currentPathUrl || currentPathUrl === "#") return;

    const currentComponent = Pages[currentPathUrl] || "erro";

    root.innerHTML = currentComponent === "erro"
      ? erroPage(Pages)
      : await Pages[currentPathUrl]({ currentPage: currentPathUrl, Data: Data, tagPage: root });

    emit(currentPathUrl);
    customTags();
  }

  function erroPage(Pages) {
    root.innerHTML = `
      <div class="erroPages">
        ${Object.keys(Pages).map((page, index) =>
      `<a class="Erro" id="${index}" use:href="/#/${page}">${page.toUpperCase()}</a>`
    ).join("")}
      </div>
    `;
  }

  function handleClick(e) {
    const href = e.target.getAttribute("use:href");
    if (href) {
      const normalizedHref = `#${href}`;
      console.log(normalizedHref)
      if (normalizedHref !== window.location.hash) {
        window.history.pushState(null, null, normalizedHref);
        routerPages();
      }
    }
  }


  window.addEventListener("popstate", routerPages);
  document.body.addEventListener("click", debounce(handleClick, 200));
  routerPages();
}


const $ = (seletor) => {
  on(seletor)
}


export { debounce, useNavigate, Router, on, emit,  processElement, $ };
