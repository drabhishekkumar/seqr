/* eslint-disable react/no-multi-comp */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Form } from 'semantic-ui-react'

const labelStyle = (color) => { return color ? { color: 'white', backgroundColor: color } : {} }

const styledOption = (option) => {
  return {
    key: option.text || option.value,
    text: option.text || option.value,
    label: option.color ? { empty: true, circular: true, style: labelStyle(option.color) } : null,
    ...option,
  }
}

export class Multiselect extends React.Component {
  static propTypes = {
    color: PropTypes.string,
    options: PropTypes.array,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  }

  state = {
    options: this.props.options.map(styledOption),
  }

  renderLabel = (data) => {
    return { color: this.props.color, content: data.text || data.value, style: labelStyle(data.color) }
  }

  handleChange = (e, data) => {
    this.props.onChange(data.value)
  }

  handleAddition = (e, { value }) => {
    this.setState({
      options: [styledOption({ value }), ...this.state.options],
    })
  }

  render() {
    return <Form.Select
      {...this.props}
      options={this.state.options}
      renderLabel={this.renderLabel}
      onChange={this.handleChange}
      onBlur={null}
      onAddItem={this.handleAddition}
      fluid
      multiple
      search
      selection
      noResultsMessage={null}
      tabIndex="0"
    />
  }
}

export class BooleanCheckbox extends React.Component {

  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.any,
  }

  handleChange = (e, data) => {
    this.props.onChange(data)
  }

  render() {
    const { value, ...props } = this.props
    return <Form.Checkbox
      {...props}
      defaultChecked={Boolean(value)}
      onChange={this.handleChange}
    />
  }
}


const StyledInlineToggle = styled(BooleanCheckbox)`
  .ui.toggle.checkbox label {
    font-size: small;
    padding-top: 0;
  }
  
  .ui.toggle.checkbox, .ui.toggle.checkbox input, .ui.toggle.checkbox label, .ui.toggle.checkbox label:before, .ui.toggle.checkbox label:after {
    height: 1.2em !important;
    min-height: 1.2em !important;
  }
  
  .ui.toggle.checkbox input:checked ~ label:before {
    background-color: ${props => `${props.color || '#2185D0'} !important`}
  }
`

export const InlineToggle = props => <StyledInlineToggle toggle inline {...props} />
