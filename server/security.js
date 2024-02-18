import hpp from "hpp";
import helmet from "helmet";

const webServers = [
  "Apache/2.4.18 (Unix) OpenSSL/1.0.1e-fips mod_bwlimited/1.4",
  "Microsoft-IIS/8.5",
  "PHP/5.4.45-0+deb7u1",
  "Nginx 10.6.2",
  "Express.js",
  "Erlang",
  "Ruby on Rails",
  "Phusion Passenger (mod_rails/mod_rack) 3.0.11",
];
/**
 * @param {express} app Express param
 */
export const appSecurity = (app) => {
  /** AVOID HTTP PArameter Pollution
   * ex: /search?firstname=John&firstname=Alice&lastname=Doe
   * */
  app.use(hpp());

  app.use(helmet());
  app.use(helmet.noSniff());
  app.use(helmet.frameguard({ action: "SAMEORIGIN" }));

  /**
   * X-XSS-Protection HTTP header
   */
  app.use(helmet.xssFilter());

  /**
   * Spoof server Name  to Microsoft-IIS/8.5. LOL
   */
  app.use(
    helmet.hidePoweredBy({
      setTo: webServers[Math.floor(Math.random() * webServers.length)],
    })
  );

  /**
   * Avoid Some browsers start doing DNS lookups of
   * other domains before visiting those domains.
   */
  app.use(helmet.dnsPrefetchControl({ allow: false }));
};
