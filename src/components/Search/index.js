import React, { useState } from "react";
import JSONDATA from "./../../tools.json";
import { LinkPanel, Link, Alert, Heading, SearchField } from "@navikt/ds-react";
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
      {!search &&
        <>
          <form role="search" className="rediger" onSubmit={handleSearchSubmit}>
            <SearchField label="Søk etter verktøy" error={error}>
              <SearchField.Input className={errorclass} value={value} onChange={handleSearchChange} autofocus="autofocus" />
              {/* {!!value && (
                <SearchField.Clear onClick={() => setValue("")}>
                  <Close /> Tøm
                </SearchField.Clear>
              )} */}
              <SearchField.Button>
                <Search /> Søk
              </SearchField.Button>
            </SearchField>
          </form>
        </>
      }
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