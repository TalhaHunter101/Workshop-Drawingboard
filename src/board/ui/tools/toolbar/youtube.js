import React, {Component} from 'react';
import Shortid from 'shortid';
import Tool from './tool';

import {createElementBaseObject} from "./utils";

import './styles.css';


class Youtube extends Component {

    handleShapeClick(e, dragStartX, dragStartY) {
        const currentState = this.state;
        const newState = {};
        newState.elements = {...currentState.elements};
        const newID = Shortid.generate();
        const width = 240,
              height = 120;
        
        newState.elements[newID] = createElementBaseObject(newID, "youtube", currentState.zoomLevel);
        
        const newElement = newState.elements[newID];
        newElement.styles.x = (dragStartX*currentState.zoomLevel)+currentState.offsetX-((width/2)*currentState.zoomLevel);
        newElement.styles.y = (dragStartY*currentState.zoomLevel)+currentState.offsetY-((height/2)*currentState.zoomLevel);
        newElement.styles.width = width*currentState.zoomLevel;
        newElement.styles.height = height*currentState.zoomLevel;
        newElement.URL = "https://www.youtube.com/embed/lxf05bSC17E";

        newState.elementState = {...currentState.elementState};
        newState.elementState[newID] = {
            selected : currentState.userID
        };
        
        newState.tool = "pan";
        newState.storeUndo = true;
        this.removeDragHandler("drawCanvas");
        this.setState(newState);
    }

    handleShapeDragStart(e, dragStartX, dragStartY, width, height) {
        const currentState = this.state;
        const newState = {};
        newState.elements = {...currentState.elements};
        const newID = Shortid.generate();

        newState.elements[newID] = createElementBaseObject(newID, "youtube", currentState.zoomLevel);
        
        const newElement = newState.elements[newID];
        newElement.styles.x = (dragStartX*currentState.zoomLevel)+currentState.offsetX;
        newElement.styles.y = (dragStartY*currentState.zoomLevel)+currentState.offsetY;
        newElement.styles.width = width*currentState.zoomLevel;
        newElement.styles.height = height*currentState.zoomLevel;
        newElement.URL = "https://www.youtube.com/embed/lxf05bSC17E";

        newState.elementState = {...currentState.elementState};
        newState.elementState[newID] = {
            selected : currentState.userID
        };
        newState.elementBeingDrawn = newID;
        newState.storeUndo = true;
        this.setState(newState);
    }
  
    render() {
        const {
            handleDeselectAllElements,
            handleDrawCanvasShow,
            registerDragHandler,
            handleDragMove,
            handleDragEnd,
            autoActivate,
            currentSelectedTool
        } = this.props;


        return (
           
            <Tool type="youtube" 
                handleDeselectAllElements={handleDeselectAllElements}
                currentSelectedTool={currentSelectedTool}
                handleDrawCanvasShow={handleDrawCanvasShow}
                registerDragHandler={registerDragHandler}
                handleClick={this.handleShapeClick}
                handleDragStart={this.handleShapeDragStart}
                handleDragMove={handleDragMove}
                handleDragEnd={handleDragEnd}
                autoActivate={autoActivate}
            />
                   
        );
    }
    
  }

  export default Youtube;