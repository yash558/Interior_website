import React, { useState } from "react";
import project from "./ProjectItem";
import "./Project.css";
const Projects = () => {
  const [items, setItems] = useState(project);

  const filterItem = (category) => {
    const updateItems = project.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(updateItems);
  };
  return (
    <div className="project container">
      <h1 className="mt-5 text-center main-heading">
        OUR <span style={{ color: "red" }}>WORK</span>
      </h1>
      <div className="d-flex flex-row">
        <hr className="line" />
        <div className="container1 mx-4 rounded-circle"></div>
        <hr className="line2" />
      </div>
      <div className="project_list container">
        <div className="project-tab d-flex">
          <div className="stock-items">
            <button
              className="btn btn-danger rounded-circle"
              onClick={() => filterItem("furniture")}
            >
              <i class="fas fa-chair"></i>
            </button>
            <p>Wooden Partiton</p>
          </div>
          <div className="stock-items">
            <button
              className="btn btn-danger rounded-circle"
              onClick={() => filterItem("aluminium")}
            >
              <i class="fas fa-door-closed"></i>
            </button>
            <p className="">Aluminium Partition</p>
          </div>
          <div className="stock-items">
            <button
              className="btn btn-danger rounded-circle"
              onClick={() => filterItem("gypsum")}
            >
              <i class="fas fa-house-user"></i>
            </button>
            <p>Gypsum Partiton</p>
          </div>
          <div className="stock-items">
            <button
              className="btn btn-danger rounded-circle"
              onClick={() => filterItem("interior")}
            >
              <i class="fas fa-door-open"></i>
            </button>
            <p>Interior Design</p>
          </div>
          <div className="stock-items">
            <button
              className="btn btn-danger rounded-circle mx-1"
              onClick={() => setItems(project)}
            >
              <i class="fas fa-universal-access"></i>
            </button>
            <p className="mx-4">All</p>
          </div>
        </div>
      </div>
      <div className="project-items container-fluid mt-5">
        <div className="row">
          <div className="col-12">
            <div className="row my-2 mx-3 px-3">
              {items.map((elem) => {
                const { id, image, category } = elem;

                return (
                  <div className="item1 col-12 col-md-6 col-lg-6 col-xl-2 my-5">
                    <div className=" rounded-3">
                      <img
                        src={image}
                        alt=""
                        height={350}
                        width={350}
                        className="p-3 rounded-2 img"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
