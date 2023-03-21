// I M P O R T S
import React, { createContext, useState } from "react";

const TransitionContext = createContext({ completed: false });

// C O M P O N E N T
export const TransitionProvider = ({ children }) => {
	const [completed, setCompleted] = useState(false);

	const toggleCompleted = (value) => {
		setCompleted(value);
	};

	return (
		<TransitionContext.Provider
			value={{
				toggleCompleted,
				completed,
			}}
		>
			{children}
		</TransitionContext.Provider>
	);
};

export default TransitionContext;
