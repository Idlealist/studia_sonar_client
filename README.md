# Studia sonar client

`.git/hooks/pre-commit`

``` bash
#!/bin/sh

npm run lint
RESULT=$?

if [ $RESULT -ne 0 ]; then
    echo "Linter founs issues aborting commit"
    exit 1
fi

echo "Lint passed, proceeding with the commit"
exit 0
```


[![SonarQube Cloud](https://sonarcloud.io/images/project_badges/sonarcloud-highlight.svg)](https://sonarcloud.io/summary/new_code?id=Idlealist_studia_sonar_client)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Idlealist_studia_sonar_client&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Idlealist_studia_sonar_client)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Idlealist_studia_sonar_client&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Idlealist_studia_sonar_client)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Idlealist_studia_sonar_client&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Idlealist_studia_sonar_client)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=Idlealist_studia_sonar_client&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=Idlealist_studia_sonar_client)