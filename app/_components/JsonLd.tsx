/**
 * Datele structurate, ca `<script type="application/ld+json">`.
 *
 * Merge într-un server component obișnuit: marcajul trebuie să existe în HTML-ul
 * livrat, fiindcă multe motoare și asistenți AI citesc pagina fără să ruleze
 * JavaScript. Injectat din client, ar lipsi tocmai de la cine avem nevoie.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          // Conținutul e construit de noi din `_lib`, nu vine de la vizitator.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
