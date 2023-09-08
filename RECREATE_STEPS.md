# Recreate this Setup

1. Setup Folders
2. npm init -y
3. npm i -D aws-cdk aws-cdk-lib constructs
4. Create .gitignore and add node_modules
5. npm i -D typescript ts-node
6. npm i -D @types/node
7. mkdir src
8. cd src/
9. mkdir infra
10. cd infra/
11. touch Launcher.ts
12. cd ..
13. mkdir stacks
14. cd stacks
15. touch datastack.ts


# Steps to setup Custom Qualifier in your CDK Project

1. Create a custom bootstrap template file in .yaml format referring to the default bootstrap template.yaml
2. cdk bootstrap --show-template > bootstrap-template.yaml (To reveal the defaultbootstrap-template.yaml)
3. Edit the Qualifier
4. Modify the launch file with DefaultStackSynthesizer (Refer Launcher.ts in src)
5. cdk bootstrap --template your-custom-template-name.yaml

