import { ProjectList } from "./App/ProjectList";
import * as _ from "lodash";
// import { DEFAULT_VALUE } from "./App/Utility/Utility";





class App {
  static init() {
    console.log(_.difference([1, 2, 3], [2, 3, 4]));
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    l
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    const someScript = document.querySelector("script");
    someScript.textContent = "alert('Hi there!');";
    document.head.append(someScript);

    const timerId = setTimeout(this.startAnalytics, 3000);
    document
      .getElementById("stop-analytics-btn")
      .addEventListener("click", () => clearTimeout(timerId));
  }
  static startAnalytics() {
    const analyticsScript = document.createElement("script");
    analyticsScript.src = "/src/Utility/Analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
