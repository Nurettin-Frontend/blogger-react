import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initValues = {
  blogs: [
    {
      id: 0,
      title: "Blog 1",
      desc: "Desc 1",
      date: "22/12/2020",
      image: "https://www.ris.world/wp-content/uploads/2019/10/Why-ISO-standards-are-crucial-for-organic-and-natural-transparency-CFTAS-president_wrbm_large.jpg",
    },
    {
      id: 1,
      title: "Blog 2",
      desc: "Desc 2",
      date: "14/09/2020",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Moscow-City_%2836211143494%29_%28crop%29.jpg/1200px-Moscow-City_%2836211143494%29_%28crop%29.jpg",
    },
  ],
};

const reducer = (state = initValues, action) => {
  if (action.type === "ADD") {
    return {
      blogs: [...state.blogs, action.newBlog],
    };
  }
  return state;
};

const persistConfig = {
  key: 'key',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistedStore = persistStore(store)
export default store;
export {persistedStore};
