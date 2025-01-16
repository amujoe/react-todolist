import React from "react";

import "./edit.scss";

const ListPage = () => {
    return (
        <div className="list-page">
            <div className="top-box">
                <div className="top-item">紧急 且 着急</div>
                <div className="top-item">紧急 且 不着急</div>
                <div className="top-item">不紧急 且 着急</div>
                <div className="top-item">不紧急 且 不着急</div>
            </div>
        </div>
    );
};

export default ListPage;
