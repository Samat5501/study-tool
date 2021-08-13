import { ADD_INFO, ADD_USER, LOGOUT, LOGIN_USER, REMOVE_INFO, ADD_LIST } from "../actions";


const local = JSON.parse(localStorage.getItem('info'))
// const local1 = JSON.parse(localStorage.getItem("users"));
// window.localStorage.clear();


const defaultState = {
  info: [],
  localUsers: [],
  currentUser: {},
  newList: {
    firstList: "",
    secondList: "",
    id: "",
  },
  success: false,
}

export const infoReducer = (state = local ? local : defaultState, action) => {
    switch (action.type) {
       // list
      case ADD_LIST:
        return {
          ...state,
          newList: [
            ...state.newList,
            {
              firstList: action.value.newList.firstList,
              secondList: action.value.newList.secondList,
            }
          ]
        }
        case ADD_INFO:
            return {
                ...state,
                info: [
                    ...state.info,
                    {
                        title: action.inf.title,
                        description: action.inf.description,
                        code: action.inf.code,
                        linkTitle: action.inf.linkTitle,
                        link: action.inf.link,
                        id: action.inf.id,
                    }
                ],
                
            }
        case REMOVE_INFO:
            return {
                ...state,
                info: state.info.filter((__, id) => id !== action.id)
            }
        // register
    case ADD_USER:
      let isLogin = state.localUsers.findIndex(
        (el) => el.userEmail === action.user.userEmail
      );
      if (isLogin === -1) {
        return {
          ...state,
          localUsers: [...state.localUsers, action.user],
          currentUser: action.user,
          success: true,
        };
      } else {
        return state;
            };
            // login
    case LOGIN_USER:
      let inUser = state.localUsers.find(
        (el) =>
          el.userEmail === action.obj.inEmail &&
          el.userPassword === action.obj.inPassword
      );
      if (inUser) {
        return {
          ...state,
          currentUser: inUser,
          success: true,
        };
      } else {
        return state;
            }
        case LOGOUT:
            return {
                ...state,
                currentUser: {
                    firstName: "",
                    lastName: "",
                    userEmail: "",
                    userPassword: "",
                    id: ""
                },
                success: false
        }
        default:
            return state
    }
}
