import React, { useState } from "react";
import JSONDATA from "./../../tools.json";
import { LinkPanel, Link, Alert, Heading, Button, Label } from "@navikt/ds-react";
import { v4 as uuidv4 } from 'uuid';

function MySearch() {
    const [value, setValue] = useState("");
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const people = JSONDATA;
  
    const filtered = !value
      ? people
      : people.filter((tool) =>
        tool.name.toLowerCase().includes(value.toLowerCase()) || tool.category.toUpperCase().includes(value)
      );
  
    const handleSearchChange = (e) => {
      setValue(e.target.value)
      setError("")
    };

  return (
    <>
     <div class="sokeboks navds-form-field navds-form-field--medium navds-search-field"><label for="searchfield-60202ff8-10db-4da7-985e-542dd3957b0e" class="navds-text-field__label navds-label">Verktøysøk </label><>{!search && (<>| <Link href="#" className="kategorilenke" onClick={() => setSearch("True")}>Vis kategorier</Link></>)}</>
            <div class="navds-search-field__input-wrapper">
              <input id="searchfield-60202ff8-10db-4da7-985e-542dd3957b0e" autofocus="autofocus" aria-invalid="false" type="search" role="searchbox" class="navds-search-field__input navds-text-field__input navds-body-short navds-body-medium" value={value} onChange={handleSearchChange} />
              {!!value && (
                <button onClick={() => setValue("") & setSearch("") & setError("")} class="navds-search-field__clear-button navds-button navds-button--secondary navds-button--medium"><span class="navds-button__inner navds-body-short"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 4.385L13.385 12 21 19.615 19.615 21 12 13.385 4.385 21 3 19.615 10.615 12 3 4.385 4.385 3 12 10.615 19.615 3 21 4.385z" fill="currentColor"></path></svg></span></button>
              )}
              <button onClick={() => setError("noresults")} class="navds-search-field__button navds-button navds-button--primary navds-button--medium"><span class="navds-button__inner navds-body-short"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 0a9 9 0 017.039 14.61L24 22.57 22.571 24l-7.962-7.961A9 9 0 119 0zm0 2a7 7 0 100 14A7 7 0 009 2z" fill="currentColor"></path></svg> Søk</span></button></div>
            <div id="searchfield-error-60202ff8-10db-4da7-985e-542dd3957b0e" aria-relevant="additions removals" aria-live="polite"></div></div>

          {error && !value &&
              <Alert className="rediger" variant="error">
                <Heading spacing size="small" level="3">
                  Søkefeltet kan ikke være tomt. Forsøk å søke etter et verktøy.
                </Heading>
                <p>Dersom noe er uklart <Link target="_blank" href="https://forms.office.com/r/UyFMJsLfKM?lang=nb-NO">tips oss gjerne</Link> så forbedrer vi løsningen. Hilsen Team ResearchOps.</p>
              </Alert>
          }

          {search && !value &&
            <>
              <Label className="kataloglabel" size="medium">Kategorier</Label>
              <Button className="rediger" id="searchsuggestion" onClick={() => setValue("ANALYSE")}>Analyse</Button>
              <Button className="rediger" id="searchsuggestion" onClick={() => setValue("DESIGN")}>Design</Button>
              <Button className="rediger" id="searchsuggestion" onClick={() => setValue("KATALOG")}>Kataloger</Button>
              <Button className="rediger" id="searchsuggestion" onClick={() => setValue("NETTSIDER")}>NAV relaterte nettsider</Button>
            </>
          }

        {error && value &&
              <Alert className="rediger" variant="error">
                <Heading spacing size="small" level="3">
                  Ingen resultater funnet
                </Heading>
                <p>Vi legger stadig til nye verktøy, <Link target="_blank" href="https://forms.office.com/r/UyFMJsLfKM?lang=nb-NO">tips oss gjerne</Link> hva du forsøkte å søke etter, så legger vi det til. Hilsen Team ResearchOps.</p>
              </Alert>
          }

        {value &&
            filtered.map((tool) => {
              return (
                <LinkPanel key={uuidv4()} className="rediger" href={tool.link} target="_blank" rel="noopener noreferrer">
                  <LinkPanel.Title>
                    {tool.name}
                  </LinkPanel.Title>
                </LinkPanel>
              );
            })}
    </>
    );
}

export default MySearch;