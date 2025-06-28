const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>

      {
        if (poem.lines.length > index + 1) {
            return (
                <>
            <p key={index + '-line'}>
          {line}
            </p>
            <hr key={index + '-separator'} />
            </>
            )
        }else{
            return (<p key={index + '-line'}>
            {line}
        </p>)
        }
      }
        
      )}
    </article>
  );
}