import React from "react";
import keplerGlReducer from "kepler.gl/reducers";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { taskMiddleware } from "react-palm/tasks";
import { Provider, useDispatch } from "react-redux";
import KeplerGl from "kepler.gl";
import { addDataToMap } from "kepler.gl/actions";
import { processGeojson } from "kepler.gl/processors";

//import charleston from "../../data/charleston"

/*
const width = 400;
const height = 400;

const reducers = combineReducers({
    KeplerGl: keplerGlReducer
});

const store = createStore(reducer, {}, applyMiddleware(taskMiddleware));

const Map = props => (
  <KeplerGl
      id={`${props.id}`}
      mapboxApiAccessToken={token}
      width={width}
      height={height}/>
);

// TODO: Serve JSON file

this.props.dispatch(
  addDataToMap({
    // datasets
    datasets: {
      info: {
        label: 'Sample Data',
        id: 'charleston'
      },
      data: processGeojson 
    },
    // option
    option: {
      centerMap: true,
      readOnly: true 
    },
    // config
    config: {
      mapStyle: {styleType: 'light'}
    }
  })
);

*/

// real component
const KeplerComponent = () => {
    console.log("I get here");
    return (
        <>
            <p>hello</p>
        </>
    )
}



// get rendering to work
const KeplerComponent = () => {
    console.log("I get here");
    return (
        <>
            <p>hello</p>
        </>
    )
}

export default KeplerComponent;