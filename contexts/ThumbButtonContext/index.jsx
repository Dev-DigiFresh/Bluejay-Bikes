import { createContext, useEffect, useState } from 'react';

export const ThumbButtonContext = createContext({});

export const actions = {
  interstitial: 'interstitial',
  home: 'home'
};

const initialValue = {
  interstitial: false,
  home: false
};

export const ThumbButtonProvider = ({ children }) => {
  const [disabled, setDisabled] = useState(initialValue);

  const handleThumbClick = (receivedAction) => {
    const currentAction = actions[receivedAction];

    setDisabled({
      ...disabled,
      [currentAction]: true
    });
    window.sessionStorage.setItem(currentAction, true);
  };

  useEffect(() => {
    const updatedInitialValue = Object.keys(actions).reduce(
      (acc, current) => ({
        ...acc,
        [current]: typeof window !== undefined && window.sessionStorage.getItem(current)
      }),
      {}
    );

    setDisabled(updatedInitialValue);
  }, []);

  return (
    <ThumbButtonContext.Provider value={{ disabled, setDisabled, handleThumbClick }}>
      {children}
    </ThumbButtonContext.Provider>
  );
};
