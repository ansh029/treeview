import React, { Component } from 'react';
import { Text, View } from 'react-native'

import TreeView from 'react-native-final-tree-view'


const state = {
  data: [
    {
      id: 'Parent1',
      name: 'Parent1',
      children: [
        {
          id: 'child1',
          name: 'child1',
          children: [
            {
              id: 'child11',
              name: 'child11',
              children: [
                {
                  id: 'child111',
                  name: 'child111',
                },
              ],
            },
            {
              id: 'child12',
              name: 'child12',
            },
          ],
        },
      ],
    },
    {
      id: 'Parent2',
      name: 'Parent2',
      children: [
        {
          id: 'child2',
          name: 'child2',
          children: [
            {
              id: 'child21',
              name: 'child21',
            },
            {
              id: 'child22',
              name: 'child22',
            },
          ],
        },
      ],
    },
  ],
};



export default class App extends Component {



  getIndicator = (isExpanded, hasChildrenNodes) => {
    if (!hasChildrenNodes) {
      return ''
    } else if (isExpanded) {
      return ''
    } else {
      return ''
    }
  }

  renderView = (node, level, isExpanded, hasChildrenNodes) => {

    if ( level==1) {

      return (

        <View>

          <Text
            style={{
              marginLeft: 15 * level,
            }}
          >
            {this.getIndicator(isExpanded, hasChildrenNodes)} {node.name}
          </Text>

        </View>
      )

    } else {



      return (

        <View>

          <Text
            style={{
              marginLeft: 30 * level,
            }}
          >
            {this.getIndicator(isExpanded, hasChildrenNodes)} {node.name}
          </Text>
        </View>
      )

    }

  }




  render() {

    return (

      <TreeView
        data={state.data} // defined above
        renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
          return (

            <View>

              {this.renderView(node, level, isExpanded, hasChildrenNodes)}


              {/* <Text
            style={{
              marginLeft: 25 * level,
            }}
          >
            {this.getIndicator(isExpanded, hasChildrenNodes)} {node.name}
          </Text> */}
            </View>
          )
        }}
      />
    )
  }

}






