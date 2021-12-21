import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import RecipePage from "./components/RecipePage";
import pageData from "./PageData";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />

      {pageData.map((page) => (
        <Route
          path={page.route}
          element={
            <RecipePage
              recipeName={page.recipeName}
              imageSrc={page.imageSrc}
              description={page.description}
              ingredientList={page.ingredientList}
              instructionList={page.instructionList}
              route={page.route}
            />
          }
        />
      ))}
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
