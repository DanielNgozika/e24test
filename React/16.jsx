let divHeight;
window.setDivHeight = (height) => (divHeight = height);

function withApp(WrappedApp) {
	return function (props) {
		function handleKeyPress(e) {
			if (e.keyCode === 8) {
				setDivHeight(e.target.value);
			}
			setDivHeight(e.target.value);
		}

		return (
			<WrappedApp
				height={divHeight}
				handleKeyPress={handleKeyPress}
				{...props}
			/>
		);
	};
}

function App({ height, handleKeyPress }) {
	const [winSize, setWinSize] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
			setWinSize(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	return (
		<div
			style={{
				border: "1px solid black",
				textAlign: "center",
				height: `${+height}px`,
				width: "90vw",
				margin: "auto",
				marginTop: "10px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center"
			}}
		>
			<span>{winSize}</span>
			<input type="number" onKeyPress={handleKeyPress} />
		</div>
	);
}

ReactDOM.render(withApp(App), document.getElementById("root"));
