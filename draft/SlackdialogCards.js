import React from "react";
import { LinkPanel } from "@navikt/ds-react";

function SlackdialogCars(props) {
    const siteUrl = props.siteUrl;
    return (
        <>
            {siteUrl.match('stackoverflow.com') &&
                <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C60FFACN5" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                        #utviklerrommet
                    </LinkPanel.Description>
                </LinkPanel>
            }

            {siteUrl.match('(.*?).google.com') &&
                <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/CB75V4761" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                        #analytics-diskusjon
                    </LinkPanel.Description>
                </LinkPanel>
            }

            {siteUrl.match('figma.com') &&
                <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C01AE0M1421" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                        #support-figma
                    </LinkPanel.Description>
                </LinkPanel>
            }

            {siteUrl.match('github') &&
                <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C60FFACN5" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                        #utviklerrommet
                    </LinkPanel.Description>
                </LinkPanel>
            }

            {siteUrl.match('uutilsynet.no') &&
                <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C7MANSGLS" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                        #nav-uu
                    </LinkPanel.Description>
                </LinkPanel>
            }

            {siteUrl.match('w3.org') &&
                <LinkPanel className="rediger" href="https://nav-it.slack.com/archives/C7MANSGLS" target="_blank" rel="noreferrer">
                    <LinkPanel.Title>
                        Slackdialog
                    </LinkPanel.Title>
                    <LinkPanel.Description>
                        #nav-uu
                    </LinkPanel.Description>
                </LinkPanel>
            }
        </>
    );
}

export default SlackdialogCars;