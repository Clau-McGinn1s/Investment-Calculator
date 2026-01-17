
export function InputGroup({updateData, refData}){
   

    return (
        <>
            <div id="user-input">
                <div className="input-group">
                    <div>
                        <label htmlFor="initialInvestment" >Initial Investment</label>
                        <input  name="initialInvestment" type="number" defaultValue={refData.initialInvestment} min={100} step={100} onChange={(e)=>updateData(e.target.value, e.target.name)} placeholder="$ 15,000" />    
                    </div>
                    <div>
                         <label htmlFor="annualInvestment">Annual Investment</label>
                        <input  name="annualInvestment" type="number" defaultValue={refData.annualInvestment} min={100}  step={100} onChange={(e)=>updateData(e.target.value, e.target.name)} placeholder="$ 15,000" /> 
                    </div>
                </div>
                <div className="input-group">
                    <div>
                        <label htmlFor="expectedReturn">Expected Return (x times)</label>
                        <input  name="expectedReturn" type="number" defaultValue={refData.expectedReturn} min={0.1} step={0.1}  onChange={(e)=>updateData(e.target.value, e.target.name)} placeholder="3.7 x"/>
                    </div>
                    <div>
                        <label htmlFor="duration">Duration (Years)</label>
                        <input  name="duration" type="number"  defaultValue={refData.duration} onChange={(e)=>updateData(e.target.value, e.target.name)} placeholder="3 Years"/>
                    </div>
                </div>
            </div>
        </>
    )

}// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)