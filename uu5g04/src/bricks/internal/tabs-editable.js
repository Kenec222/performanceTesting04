//@@viewOn:imports
import React from "react";
import UU5 from "uu5g04";

import TabsItem from "../tabs-item.js";
import ns from "../bricks-ns.js";
import BricksLsi from "../bricks-lsi.js";
//@@viewOff:imports

const Lsi = BricksLsi.tabsEditable;

const getEditableItemLabel = (item, itemIndex) => {
  if (item.props.header) {
    return item.props.header;
  } else {
    return `Item ${itemIndex + 1}`;
  }
};

const newEditableItem = {
  tagName: "UU5.Bricks.Tabs.Item",
  props: {
    header: "New Item"
  }
};

const editableComponentPropsSetup = [
  {
    name: "type",
    type: "switchSelector",
    label: Lsi.typeLabel,
    getProps: props => ({
      items: [
        { value: "tabs", content: <UU5.Bricks.Lsi lsi={Lsi.typeValueTabs} /> },
        { value: "pills", content: <UU5.Bricks.Lsi lsi={Lsi.typeValuePills} /> }
      ]
    })
  },
  {
    name: "size",
    type: "switchSelector",
    label: Lsi.sizeLabel,
    getProps: props => ({
      items: [
        { value: "s", content: <UU5.Bricks.Lsi lsi={Lsi.sizeValueS} /> },
        { value: "m", content: <UU5.Bricks.Lsi lsi={Lsi.sizeValueM} /> },
        { value: "l", content: <UU5.Bricks.Lsi lsi={Lsi.sizeValueL} /> },
        { value: "xl", content: <UU5.Bricks.Lsi lsi={Lsi.sizeValueXL} /> }
      ]
    })
  },
  {
    name: "borderRadius",
    type: "test",
    label: <UU5.Bricks.Lsi lsi={Lsi.borderRadiusLabel} />,
    getProps: () => ({ placeholder: UU5.Common.BaseMixin.getLsiItem(Lsi.borderRadiusPlaceholder) })
  },
  {
    name: "elevation",
    type: "switchSelector",
    label: Lsi.elevationLabel,
    getProps: props => ({
      items: [
        { value: "0", content: "0" },
        { value: "1", content: "1" },
        { value: "2", content: "2" },
        { value: "3", content: "3" },
        { value: "4", content: "4" },
        { value: "5", content: "5" }
      ]
    })
  },
  {
    name: "elevationHover",
    type: "switchSelector",
    label: Lsi.elevationHoverLabel,
    getProps: props => ({
      items: [
        { value: "0", content: "0" },
        { value: "1", content: "1" },
        { value: "2", content: "2" },
        { value: "3", content: "3" },
        { value: "4", content: "4" },
        { value: "5", content: "5" }
      ]
    })
  },
  {
    name: "justified",
    type: "switchSelector",
    label: Lsi.justifiedLabel,
    getProps: () => ({
      items: [
        { value: false, content: <UU5.Bricks.Lsi lsi={Lsi.justifiedValueFalse} /> },
        { value: true, content: <UU5.Bricks.Lsi lsi={Lsi.justifiedValueFTrue} /> }
      ]
    })
  },
  {
    name: "fade",
    type: "switchSelector",
    label: Lsi.fadeLabel,
    getProps: () => ({
      items: [
        { value: false, content: <UU5.Bricks.Lsi lsi={Lsi.fadeValueFalse} /> },
        { value: true, content: <UU5.Bricks.Lsi lsi={Lsi.fadeValueTrue} /> }
      ]
    })
  },
  {
    name: "underline",
    type: "switchSelector",
    label: Lsi.underlineLabel,
    getProps: () => ({
      items: [
        { value: false, content: <UU5.Bricks.Lsi lsi={Lsi.underlineValueFalse} /> },
        { value: true, content: <UU5.Bricks.Lsi lsi={Lsi.underlineValueTrue} /> }
      ]
    })
  }
];

const editableAdditionalPropsSetup = [
  { name: "colorSchema", type: "colorSchemaPicker", label: Lsi.colorSchemaLabel },
  {
    name: "disabled",
    type: "switchSelector",
    label: Lsi.disabledLabel,
    getProps: () => ({
      items: [
        { value: false, content: <UU5.Bricks.Lsi lsi={Lsi.disabledValueFalse} /> },
        { value: true, content: <UU5.Bricks.Lsi lsi={Lsi.disabledValueTrue} /> }
      ]
    })
  }
];

const editablePropsSetup = [
  {
    name: <UU5.Bricks.Lsi lsi={Lsi.componentPropsLabel} />,
    icon: "mdi-settings",
    setup: editableComponentPropsSetup
  },
  {
    name: <UU5.Bricks.Lsi lsi={Lsi.additionalPropsLabel} />,
    setup: editableAdditionalPropsSetup
  }
];

const editableItemPropsSetup = {
  setup: [
    { name: "name", type: "text", label: <UU5.Bricks.Lsi lsi={Lsi.tabNameLabel} />, required: true },
    { name: "header", type: "text", label: <UU5.Bricks.Lsi lsi={Lsi.tabHeaderLabel} />, required: true }
  ]
};

export const TabsEditable = UU5.Common.VisualComponent.create({
  //@@viewOn:mixins
  mixins: [UU5.Common.BaseMixin],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: ns.name("TabsEditable"),
    classNames: {
      main: ns.css("tabs-editable")
    }
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    component: UU5.PropTypes.object.isRequired
  },
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      component: undefined
    };
  },
  //@@viewOff:getDefaultProps

  //@@viewOn:reactLifeCycle
  //@@viewOff:reactLifeCycle

  //@@viewOn:interface
  getPropsToSave() {
    return this._editModal ? this._editModal.getPropsToSave() : undefined;
  },
  //@@viewOff:interface

  //@@viewOn:overriding
  //@@viewOff:overriding

  //@@viewOn:private
  _registerEditModal(modal) {
    this._editModal = modal;
  },
  //@@viewOff:private

  //@@viewOn:render
  render() {
    return (
      <UU5.BricksEditable.Modal
        shown
        component={this.props.component}
        itemComponent={TabsItem}
        ref_={this._registerEditModal}
        propsSetup={editablePropsSetup}
        itemPropsSetup={editableItemPropsSetup}
        newItemProps={newEditableItem}
        itemsSource="children"
        getItemLabel={getEditableItemLabel}
      />
    );
  }
  //@@viewOff:render
});

export default TabsEditable;
