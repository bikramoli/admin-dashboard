import React from "react";

const SocialIconGroup = (props) => {
  return (
    <div className="social-icon bg-white">
      <div className="d-flex flex-row fs-12">
        <div className="like p-2 me-2 cursor">
          <i className="bi bi-eye-fill text-secondary"></i>
          <span className="social-icon-value ms-1">{props.views}k</span>
        </div>
        <div className="like p-2 me-2 cursor">
          <i className="bi bi-heart-fill text-danger"></i>
          <span className="social-icon-value ms-1">{props.likes}k</span>
        </div>
        <div className="like p-2 me-2 cursor">
          <i className="bi bi-chat-fill text-secondary"></i>
          <span className="social-icon-value ms-1">{props.comments}</span>
        </div>
        <div className="like p-2 me-2 cursor">
          <i className="bi bi-share-fill text-secondary"></i>
          <span className="social-icon-value ms-1">{props.shareNo}</span>
        </div>
      </div>
    </div>
  );
};
export default SocialIconGroup;
