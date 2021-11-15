function App() {
	const [winSize, setWinSize] = useState(window.innerWidth);
	const [divHeight, setDivHeight] = useState("initial");

	useEffect(() => {
		function handleResize() {
			setWinSize(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	function handleKeyPress(e) {
		if (e.keyCode === 8) {
			setDivHeight(e.target.value);
		}
		setDivHeight(e.target.value);
	}

	return (
		<div
			style={{
				border: "1px solid black",
				textAlign: "center",
				height: `${+divHeight}px`,
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
