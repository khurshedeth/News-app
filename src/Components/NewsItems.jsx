import React from "react";

function NewsItems({ title, description, src, url }) {
  return (
    <div class="container mt-5">
      <div class="card">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={src} class="img-fluid rounded-start" alt="Placeholder" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <a href={url} class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItems;
