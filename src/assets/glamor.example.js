export default
`const styles = glamor.css({
  fontSize: 20,
  textAlign: 'center',
})

function MyStyledDiv({className = '', ...rest}) {
  return (
    <div
      className={\`\${styles} \${className}\`}
      {...rest}
    />
  )
}
`