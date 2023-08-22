import React from "react";

const NewsItems=(props)=> {
   

      let {title , description , imageUrl , newsUrl , author , date}=props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {date}</small></p>
            <a href={newsUrl}  className="btn btn-dark btn-sm">
             
             Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItems;
