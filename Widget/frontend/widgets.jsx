import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(< Root />, root)

})

const tabsData = [{title: 'One', body: "kjh kjh kjh kjh"}, {title: 'Two', body: "qwer qwe qwe qwe"}, {title: 'Three', body: "asdf asdfa asdf"}];

const Root = function() {
  return (
    <div>
      < Clock />
      < Tabs tabs={tabsData} />
      < Weather />
    </div>
  )
}