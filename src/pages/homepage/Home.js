import React, { useState, useEffect } from "react";
import { getArticles } from "../../requests/Requests";

import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

import "./home.style.css";

const sections = `arts,business,fashion,home,technology,world`
  .replace(/ /g, "")
  .split(",");

const Home = () => {
  const [selectedSection, setSelectedSection] = useState("arts");
  const [articles, setArticles] = useState([]);
  const [initialized, setInitialized] = useState(false);

  const load = async (section) => {
    setSelectedSection(section);
    const response = await getArticles(section);
    setArticles(response.data.results || []);
  };

  const loadArticles = async (e) => {
    if (!e || !e.target) {
      return;
    }
    setSelectedSection(e.target.value);
    load(e.target.value);
  };

  const initializeArticles = () => {
    load(selectedSection);
    setInitialized(true);
  };

  useEffect(() => {
    if (!initialized) {
      initializeArticles();
    }
  }, []);

  return (
    <div className="home">
      <div className="col-12">
        <div className="row">
          <div className="col-md-12 d-none d-md-block s-lg-block d-xl-block">
            <ListGroup className="sections">
              {sections.map((section) => (
                <ListGroup.Item
                  key={section}
                  className="list-group-item"
                  active={section === selectedSection}
                >
                  <a
                    className="link"
                    onClick={() => {
                      load(section);
                    }}
                  >
                    {section}
                  </a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
          <div className="col">
            <Form className="d-sm-block d-md-none d-lg-none d-xl-none">
              <Form.Group controlId="section">
                <Form.Control
                  as="select"
                  onChange={loadArticles}
                  value={selectedSection}
                >
                  {sections.map((section) => (
                    <option key={section} value={section}>
                      {section}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
            <h2 className="selected-section">{selectedSection}</h2>
            <div className="articles">
              {articles
                .filter((article, idx) => idx < 6)
                .map((article, i) => (
                  <div key={i} className="article-list">
                    <h5 className="article-title">
                      {article.title.slice(0, 40)}...
                    </h5>
                    <img
                      className="article-img"
                      src={
                        Array.isArray(article.multimedia) &&
                        article.multimedia[article.multimedia.length - 1]
                          ? article.multimedia[article.multimedia.length - 1]
                              .url
                          : null
                      }
                      alt=""
                    />
                    <p className="text">{article.abstract}</p>
                    <button
                      className="btn"
                      onClick={() => {
                        window.location.href = article.url;
                      }}
                    >
                      More
                    </button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
