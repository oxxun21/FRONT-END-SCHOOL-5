function TextArea() {
  return (
    <div className="wrapper">
      <textarea
        readOnly
        maxLength={3}
        style={{backgroundColor: "blue"}}
      />
    </div>
  );   
}

export default TextArea;