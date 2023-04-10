import { createContext, useCallback, useReducer } from "react";

// Create Context
const DoraContext = createContext();

// Type
const type = {
  BLOG: "BLOG",
  COLOR: "COLOR",
  PORTFOLIO_MODAL: "PORTFOLIO_MODAL",
  PORTFOLIO_MODAL_DESCRIPTION : "PORTFOLIO_MODAL_DESCRIPTION",
  PORTFOLIO_MODAL1: "PORTFOLIO_MODAL1",
  PORTFOLIO_MODAL2: "PORTFOLIO_MODAL2",
};
const { BLOG, COLOR, PORTFOLIO_MODAL, PORTFOLIO_MODAL1, PORTFOLIO_MODAL2 } = type;

// Initial Value
const initialState = {
  color: "yellow",
  blog: null,
  blogs: [
    {
      id: 1,
      date: "23 Oct 2022",
      img: "images/blog/1.png",
      title: "User interface design or user interface engineering",
      catagory: "UI/UX Design",
    },
    {
      id: 2,
      date: "13 Dec 2022",
      img: "images/blog/2.png",
      title: "Web design encompasses many different skills",
      catagory: "Web Design",
    },
    {
      id: 3,
      date: "23 Dec 2022",
      img: "images/blog/3.png",
      title: "Jim Morisson Says when the musics over turn off the light",
      catagory: "Web Development",
    },
  ],
  description:null,
  portfolio_modal: false,
  portfolio_modal1: false,
  portfolio_modal2: false,
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  console.log('type----', type)
  console.log('state----', state)
  console.log('payload----', payload)
  switch (type) {
    case BLOG:
      return {
        ...state,
        blog: payload,
      };
    case PORTFOLIO_MODAL:
      return {
        ...state,
        portfolio_modal: payload,
      };
      // case PORTFOLIO_MODAL_DESCRIPTION:
      //   return {
      //     ...state,
      //     description: payload,
      //   };
      case PORTFOLIO_MODAL1:
        console.log('PORTFOLIO_MODAL1-------')
        return {
          ...state,
          portfolio_modal1: payload,
        };
        case PORTFOLIO_MODAL2:
          return {
            ...state,
            portfolio_modal2: payload,
          };
    case COLOR:
      return {
        ...state,
        color: payload,
      };
    default:
      return state;
  }
};

// Watson State
const DoraState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Page Color
  const colorChange = useCallback((value) => {
    dispatch({
      type: COLOR,
      payload: value,
    });
  }, []);

  const blogDetails = useCallback((value) => {
    dispatch({
      type: BLOG,
      payload: value,
    });
  }, []);

  const portfolio_modal_show = useCallback((value,value1) => {
    console.log('portfolio_modal_show--------', value)
    console.log('value1--------', value1)
    dispatch({
      type: PORTFOLIO_MODAL,
      payload: value,
    });
  }, []);
  const portfolio_modal_show1 = useCallback((value,value1) => {
    console.log('portfolio_modal_show--------', value)
    console.log('value1--------', value1)
    dispatch({
      type: PORTFOLIO_MODAL1,
      payload: value,
    });
  }, []);
  // const portfolio_modal_Description = useCallback((value) => {
  //   console.log('portfolio_modal_show1--------', value)
  //   dispatch({
  //     type: PORTFOLIO_MODAL_DESCRIPTION,
  //     payload: value,
  //   });
  // }, []);
  const portfolio_modal_show2 = useCallback((value) => {
    dispatch({
      type: PORTFOLIO_MODAL2,
      payload: value,
    });
  }, []);

  const { color, blog, blogs, portfolio_modal, portfolio_modal1, portfolio_modal2 } = state;
  return (
    <DoraContext.Provider
      value={{
        color,
        colorChange,
        blogs,
        blog,
        blogDetails,
        portfolio_modal,
        portfolio_modal1,
        portfolio_modal2,
        portfolio_modal_show,
        portfolio_modal_show1,
        portfolio_modal_show2,
      }}
    >
      {children}
    </DoraContext.Provider>
  );
};

export default DoraState;
export { DoraContext };
