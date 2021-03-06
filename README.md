# react-mui-select
> Select wrapper for materialUi

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
  };

  static defaultProps = {
    items: []
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-mui-select --registry=https://registry.npm.taobao.org
```

```js
import ReactMuiSelect from 'react-mui-select';
```

```scss
// customize your styles:
$react-mui-select-options:(
);

@import 'node_modules/react-mui-select/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-ant-select --save
// import : import ReactAntSelect from 'react-ant-select'

class App extends React.Component {
  state = {
    v1: 'op2',
    items: [
      {
        value: 'op1',
        label: 'option1d'
      },
      {
        value: 'op2',
        label: 'option2d'
      },
      {
        value: 'op3',
        label: 'option3d'
      }
    ],
    items2: nx.antBuildItems(['simple1', 'simple2', 'simpl4']),
    items3: nx.antBuildItems(['simple1', 'simple2', 'simpl4'], true)
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  handleChange = event => {
    console.log(event.target.value);
    this.setState({ v1: event.target.value })
  };

  render() {
    return (
      <div className="hello-react-mui-select">
        <div>
          <ReactMuiSelect
            value={this.state.v1}
            onChange={this.handleChange}
            style={{ width: 200 }} items={this.state.items} ref='rc' />
        </div>
      </div>
    );
  }
}

```
