import React, { useState } from 'react';
import './Mood.css';

const Mood = () => {
    let [mood, setMood] = useState(null);
    const handleChange = (event) => {
        if (event.key === 'Enter') {
            this.setState({value: event.target.value});
        }
    }
    if (mood===null) {
        return (
            <div class="mood-input">
                <form>
                    <label>What is your mood? </label>
                    <input type="text"
                    class="text"
                    value={mood}
                    onChange={e => setMood(e.target.value)} />
                </form>
            </div>
        )
    }
    return (
        <div class="mood-input">
            <form>
                <label>What is your mood? </label>
                <input type="text"
                class="text"
                value={mood}
                onChange={e => setMood(e.target.value)} />
            </form>
            <p class="display-mood">The weather here's got you feeling {mood}, huh?</p>
        </div>
    )
}
export default Mood;