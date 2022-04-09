import React, { useState } from "react";
import JSONDATA from "./../../tools.json";
import { LinkPanel, Link, Alert, Heading, Button, Label, SearchField } from "@navikt/ds-react";
import { Search, Close } from "@navikt/ds-icons";

function MySearch() {
  const [foundUsers, setFoundUsers] = useState(people);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [errorclass, setErrorclass] = useState("navds-search-field__input navds-text-field__input navds-body-short navds-body-medium");
  const people = JSONDATA;


  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    if (!e.target[0].value) {
      setError("Du må fylle inn søkefeltet")
      setErrorclass("navds-text-field--error navds-search-field__input navds-text-field__input navds-body-short navds-body-medium")
    }
  };

  const handleSearchChange = (e) => {
    setValue(e.target.value)
    setError("")
    setSearch("")
    setErrorclass("navds-search-field__input navds-text-field__input navds-body-short navds-body-medium")
    // if (!e.target.value) {
    //   setSearch("")
    // }

    const keyword = e.target.value;
    if (keyword !== "") {
      const results = people.tools.filter((tool) => {
        return tool.name.toLowerCase().includes(keyword.toLowerCase()) || tool.description.toLowerCase().includes(keyword.toLowerCase()) || tool.category.startsWith(keyword)
      });
      setFoundUsers(results);
    }
  };

  return (
    <>
    {!search  &&
        <>
         <form role="search" className="rediger" onSubmit={handleSearchSubmit}>
        <SearchField  hideLabel label="Søk" error={error}>
  <SearchField.Input className={errorclass} placeholder="Søk etter verktøy" value={value} onChange={handleSearchChange} autofocus="autofocus" />
  {!!value && (
    <SearchField.Clear onClick={() => setValue("")}>
      <Close /> Tøm
    </SearchField.Clear>
  )}
  <SearchField.Button>
    <Search /> Søk
  </SearchField.Button>
</SearchField>
</form>

      {/* <form role="search" onSubmit={handleSearchSubmit}>
        <div class="sokeboks navds-form-field navds-form-field--medium navds-search-field"><label for="searchfield-60202ff8-10db-4da7-985e-542dd3957b0e" class="navds-text-field__label navds-label">Søk </label><>{!search && (<>| <Link href="#" className="kategorilenke" onClick={() => setSearch("True") & setValue("") & setError("") & setErrorclass("navds-search-field__input navds-text-field__input navds-body-short navds-body-medium")}>Kategorier</Link></>)}</>
          <div class="navds-search-field__input-wrapper">
            <input name="value" className={errorclass} placeholder="Søk etter verktøy" value={value} onChange={handleSearchChange} id="searchfield-60202ff8-10db-4da7-985e-542dd3957b0e" autofocus="autofocus" aria-invalid="false" type="search" role="searchbox" />
            {!!value && (
              <button aria-label="Tøm" onClick={() => setValue("") & setSearch("") & setError("")} class="navds-search-field__clear-button navds-button navds-button--secondary navds-button--medium"><span class="navds-button__inner navds-body-short"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 4.385L13.385 12 21 19.615 19.615 21 12 13.385 4.385 21 3 19.615 10.615 12 3 4.385 4.385 3 12 10.615 19.615 3 21 4.385z" fill="currentColor"></path></svg></span></button>
            )}
            <button type="submit" class="navds-search-field__button navds-button navds-button--primary navds-button--medium"><span class="navds-button__inner navds-body-short"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 0a9 9 0 017.039 14.61L24 22.57 22.571 24l-7.962-7.961A9 9 0 119 0zm0 2a7 7 0 100 14A7 7 0 009 2z" fill="currentColor"></path></svg> Søk</span></button></div>
          {error &&
            <div id="textField-error-213931c1-e1a4-4c17-8429-9d81598cdf87" aria-relevant="additions removals" aria-live="polite"><div class="navds-error-message navds-error-message--medium navds-label">Du må fylle ut et verktøynavn.</div></div>
          }
        </div>
      </form> */}
      </>
    }

      {search && !value &&
        <>
          <hr className="rediger" />
          {/* <div className="katalogwrapper"><Label aria-live="polite" className="kataloglabel" size="medium">Kategorier</Label> | <Link href="#" className="kategorilenke" onClick={() => setSearch("") & setValue("") & setError("") & setErrorclass("navds-search-field__input navds-text-field__input navds-body-short navds-body-medium")}>Søk</Link></div> */}
          <Button type="submit" className="rediger" id="searchsuggestion" value="#team" onClick={handleSearchChange}>Teamarbeid</Button>
          <Button type="submit" className="rediger" id="searchsuggestion" value="#analyse" onClick={handleSearchChange}>Måling og analyse</Button>
          <Button type="submit" className="rediger" id="searchsuggestion" value="#undersøkelse" onClick={handleSearchChange}>Spørreundersøkelse</Button>
          <Button type="submit" className="rediger" id="searchsuggestion" value="#hjelpeartikler" onClick={handleSearchChange}>Hjelpeartikler</Button>
          <Button type="submit" className="rediger" id="searchsuggestion" value="#katalog" onClick={handleSearchChange}>Kataloger</Button>
          {/* <Button type="submit" className="rediger" id="searchsuggestion" value="#nettsider" onClick={handleSearchChange}>NAV relaterte nettsider</Button> */}
        </>
      }

      {/*
      {value && foundUsers && foundUsers.length > 0 &&
      <div><p aria-live="polite" className="rediger">{foundUsers.length} resultater</p></div>
      }*/}
      
      {value && foundUsers && foundUsers.length > 0 ? (
        foundUsers.map((tool) => (
          <LinkPanel key={tool.id} className="rediger" href={tool.link} target="_blank" rel="noopener noreferrer">
            <LinkPanel.Title>
              {tool.name}
            </LinkPanel.Title>
            {tool.description != "@" &&
            <LinkPanel.Description>
              {tool.description}
            </LinkPanel.Description>
            }
          </LinkPanel>
        ))
      ) : (
        <>
          {value &&
            <Alert className="rediger" variant="error">
              <Heading aria-live="polite" spacing size="small" level="3">
                Fant ingen verktøy
              </Heading>
              <p>Vi legger stadig til nye verktøy, <Link target="_blank" href="https://forms.office.com/r/UyFMJsLfKM?lang=nb-NO">tips oss gjerne</Link> om hva du forsøkte å søke etter, så legger vi det til.</p>
              <p>Hilsen Team ResearchOps.</p>
            </Alert>
          }
        </>
      )}
      {value && <hr className="rediger" />}
    </>
  );
}

export default MySearch;