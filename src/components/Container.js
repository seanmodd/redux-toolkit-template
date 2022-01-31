import React from "react";

const Container = () => {
  return <div />;
};

export default Container;


export const actionCreator = (payload) => {
  return {
    type: 'ACTION_TYPE',
    payload
  }
};



