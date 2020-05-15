import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TableElement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value,
		}
	}

	handleClick() {

	}

	render() {
		return (
			<button className="tableElement" onClick={this.handleClick}>
				${this.state.value}
			</button>
		);
	}
}

class Category extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			budgeted: 0,
			actual: 0,
			difference: 0,
		}
	}

	render() {
		return (
			<div className="category">
				<div className="categoryTitle">
					{this.state.name}:
				</div>
				<div className="categoryRow">
					<TableElement id="budgeted" value={this.state.budgeted}/>
					<TableElement id="actual" value={this.state.actual}/>
					<button className="addTransaction">+</button>
				</div>
			</div>
		);
	}
}

class Tracker extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			income: ["Salary","Commissions"],
			expenses: ["Rent", "Utilities", "Gas", "Groceries"]
		};
	}

	render() {
		return (
			<div>
				<div>
					<h2>Income</h2>
					{this.state.income.map(title => (
						<Category name={title}/>
					))}
				</div>
				<div>
					<h2>Expenses</h2>
					{this.state.expenses.map(title => (
						<Category name={title}/>
					))}
				</div>
			</div>
		);
	}
}

ReactDOM.render(
  <Tracker />,
  document.getElementById('root')
);