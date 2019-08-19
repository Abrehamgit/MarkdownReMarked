import React from "react";

class HoverInput extends React.Component {
	defaultProps = {
		top: 0,
		left: 0,
		display: false,
		closeInput: () => {},
		submitInputValue: () => {}
	};

	state = {
		value: ""
	};

	onKeyDown = e => {
		if (e.key === "Escape") {
			this.setState({ value: "" });
			this.props.closeInput();
		}
		if (e.key === "Enter") {
			this.setState({ value: "" });
			this.props.submitInputValue(this.state.value);
		}
	};

	onClick = () => {
		this.setState({ value: "" });
		this.props.submitInputValue(this.state.value);
	};

	render() {
		return (
			<div
				className="hover-input-contianer"
				style={{
					position: "relative",
					top: this.props.top + 20,
					left: this.props.left,
					display: this.props.display ? "flex" : "none"
				}}
			>
				<input
					type="text"
					className="hover-input"
					placeholder="Paste yout link here"
					autoFocus
					value={this.state.value}
					onChange={e => {
						this.setState({ value: e.target.value });
					}}
					onKeyDown={this.onKeyDown}
				/>
				<button onClick={this.onClick} className="hover-button">
					ADD
				</button>
			</div>
		);
	}
}

export default HoverInput;
