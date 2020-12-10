import React, { Component } from "react";
import * as api from "../api/api-req";
import { Link } from "@reach/router";
import Vote from "./Vote";
import SortBy from "./SortBy";
export default class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getAllArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  }

//componentDidUpdate() {}


  render() {
    if (this.state.isLoading) {
      return <p>Loading...</p>;
    }
    const { articles } = this.state;
    return (
      <div>
      <div className='sub-header-container'>
        <h1 className="header-subhead">All Articles</h1>
        <SortBy />
      </div>
        {articles.map((article) => (
          <div className="article-card" key={article.article_id}>
            {/*console.log(article)*/}
            <p className="author-time">
              {" "}
              <em className="author-time-em">created by: </em>
              {article.author} <em className="author-time-em">at:</em>{" "}
              {article.created_at}{" "}
              <div className="topic">
                Topic: <strong>{article.topic}</strong>
              </div>
            </p>
            <Link
              className="art-title"
              to={`/articles/${article.article_id}`}
            >
              <p>{article.title}</p>
            </Link>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <Vote article_id={article.article_id} votes={article.votes} />
            <div className="article-footer">
              <Link
                className="article-footer"
                to={`/articles/${article.article_id}`}
              >
                <p>{article.comment_count} comments...💬</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
