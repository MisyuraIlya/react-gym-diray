import React from 'react'
import { Table } from 'semantic-ui-react'


const OldProgram = () => {



    return (
        <Table celled fixed singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>1 Set</Table.HeaderCell>
                    <Table.HeaderCell>2 Set</Table.HeaderCell>
                    <Table.HeaderCell>3 Set</Table.HeaderCell>
                    <Table.HeaderCell>4 Set</Table.HeaderCell>
                    <Table.HeaderCell>5 Set</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>Bench press</Table.Cell>
                    <Table.Cell>12</Table.Cell>
                    <Table.Cell>10</Table.Cell>
                    <Table.Cell>8</Table.Cell>
                    <Table.Cell>6</Table.Cell>
                    <Table.Cell>6</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Bench press</Table.Cell>
                    <Table.Cell>12</Table.Cell>
                    <Table.Cell>10</Table.Cell>
                    <Table.Cell>8</Table.Cell>
                    <Table.Cell>6</Table.Cell>
                    <Table.Cell>6</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Squat</Table.Cell>
                    <Table.Cell>12</Table.Cell>
                    <Table.Cell>10</Table.Cell>
                    <Table.Cell>8</Table.Cell>
                    <Table.Cell>6</Table.Cell>
                    <Table.Cell>6</Table.Cell>
                </Table.Row>

            </Table.Body>
        </Table>
    );
};

export default OldProgram;