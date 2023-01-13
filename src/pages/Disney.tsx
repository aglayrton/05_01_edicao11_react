import React, { useEffect } from "react";
import { getDisney } from "../features/disneySlice";
import { useAppDispatch, useAppSelector } from "../hooks/hook";

const PageDisney: React.FC = () => {
  const { response } = useAppSelector((state) => state.disney);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getDisney());
  }, []);

  console.log(response);
  return <React.Fragment>
    {
      response?.map((element, index)=>(
        <div key={index}>
          <h1>{element.name}</h1>
          <img src={element.imageUrl} alt="image" />
        </div>
      ))
    }
  </React.Fragment>;
};

export default PageDisney;
