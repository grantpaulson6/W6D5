import React from 'react'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.tabs = this.props.tabs;
    this.state = { selected: 0 }
  }

  updateSelected(e) {
    const selected = parseInt(e.currentTarget.attributes.index.value)
    this.setState({ selected })
  }

  render() {
    const currentTab = this.tabs[this.state.selected];
    return (
      <div className="widget tabs">
        <ul id="tabHeader">
          {this.tabs.map((tab, i) => {
            return (
              <h3 key={tab.id} index={i} onClick={this.updateSelected.bind(this)}>{tab.title}</h3>
            )
          })}
        </ul>

        <ul id="tabBody">
          <li>{currentTab.body}</li>
        </ul>

      </div>
    )

  }

}

export default Tabs