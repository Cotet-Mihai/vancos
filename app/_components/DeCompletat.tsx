/**
 * Marcaj pentru o informație pe care încă nu o avem de la client.
 *
 * Se folosește oriunde o valoare din `_lib` e `null`. Ideea e ca lipsa să sară
 * în ochi în pagină, nu să treacă drept text gol sau drept un placeholder în
 * paranteze pătrate care arată ca text real pentru cine nu știe convenția.
 */
export function DeCompletat({ camp }: { camp: string }) {
  return (
    <span className="rounded-md bg-accent-warm/20 px-1.5 py-0.5 font-mono text-xs font-bold tracking-wide text-accent-warm">
      [de completat: {camp}]
    </span>
  );
}
