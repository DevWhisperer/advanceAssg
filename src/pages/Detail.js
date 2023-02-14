import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const currentId = params.id;
  const currentTask = useSelector((state) => {
    return state.listUpdate.filter((item) => item.id == currentId)[0];
  });
  const goToLevel3 = () => {
    navigate("/level3");
  };

  return (
    <div>
      <h3>id: {currentTask.id}</h3>
      <h1>{currentTask.title}</h1>
      <p>{currentTask.desc}</p>
      <Link to={"/"}>
        <button>이전으로</button>
      </Link>
      <button onClick={goToLevel3}>level3 단계로 가기</button>
    </div>
  );
};

export default Detail;
