import { useState } from "react";

const Law = ({ law }) => {
    const [expanded, setExpanded] = useState(false);
    
    return (
        <div className="law">
            <h3>{law.lawName}</h3>
        </div>
    );
}

export default Law;