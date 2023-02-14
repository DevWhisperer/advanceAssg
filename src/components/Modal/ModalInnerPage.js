import React from "react";

const ModalInnerPage = ({ modalNum, setModalNum }) => {
  const closeModalPage = () => {
    setModalNum(0);
  };
  switch (modalNum) {
    case 1:
      return (
        <div>
          나가는 방법이 취소버튼 뿐입니다.
          <button onClick={closeModalPage}>취소</button>
          <button>확인</button>
        </div>
      );
    case 2:
      return (
        <div>
          <div>모달창 바깥을 누르면 나가집니다.</div>
          <button onClick={closeModalPage}>닫기</button>
        </div>
      );
  }
};

export default ModalInnerPage;
