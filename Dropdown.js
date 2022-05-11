
export const Dropdown = ({options,setSelectedValue,selectedValue,id}) => (
  <select name="pets" id={id} onChange={e=>setSelectedValue(e.target.value)}>
    
    {options.map(({value,label})=>{ 
      return  <option value={value} selected={value === selectedValue}>{label}</option>
    })}
   
    
  </select>
);