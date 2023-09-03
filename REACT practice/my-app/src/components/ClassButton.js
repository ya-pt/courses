import React, { Component } from "react";

// componentDidMount() - вызывается после рендеринга компонента
// componentDidUpdate() - вызывается после обновления компонента


class ClassButton extends Component {
    // props(является ссылкой на объект, содержащий все переданные свойства)
  constructor(props) {
    super(props);
    this.state = {
      click: 0,
    };
  }

  componentDidMount() {
    document.title = `clicked ${this.state.click}`;
  }

  componentDidUpdate() {
    document.title = `clicked ${this.state.click}`; //происходит автоматически, если произошло изменение this.state
  }

  handleClick = () => {
    this.setState((prevState) => ({ click: prevState.click + 1 }));
  };

  render() {
    const { text } = this.props; //берет значение из свойства(если указано) или defaultProps
    const { click } = this.state;

    return (
      <button onClick={this.handleClick}>
        {text}
        {click}
      </button>
    );
  }
}

//если внутрь компонента значение не передано, будет использоваться значение по default
ClassButton.defaultProps = {
  text: "кнопка",
};

export default ClassButton;