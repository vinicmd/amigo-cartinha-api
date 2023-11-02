import type { AccountModel } from '../models/account'

export const secretFriendEmail = (secretFriend: AccountModel): string => {
  return `
<table
  align="center"
  cellpadding="0"
  cellspacing="0"
  style="
    color: rgb(25, 25, 25) !important;
    max-width: 685px;
    padding: 0px 20px;
    margin: 20px auto 0px;
  "
  data-ogsc="rgb(51, 51, 51)">
  <tbody style="margin: 0px; color: rgb(25, 25, 25) !important" data-ogsc="">
    <tr style="margin: 0px; color: rgb(25, 25, 25) !important" data-ogsc="">
      <td
        style="
          margin: 0px;
          padding: 0px;
          text-align: left;
          font-size: 16px;
          line-height: 26px;
          color: rgb(25, 25, 25) !important;
        "
        data-ogsc="">
        <h2
          style="margin: 0px 0px 10px; color: rgb(25, 25, 25) !important"
          data-ogsc="">
          Você saiu com... ${secretFriend.name}!!!
        </h2>
        <p
          style="
            margin: 0px 0px 5px;
            color: rgb(25, 25, 25) !important;
          ">
          <strong style="margin: 0px; color: rgb(25, 25, 25) !important">
            Aqui estão os dados do ${secretFriend.name}
          </strong>
        </p>
        <p
          style="
            margin: 0px 0px 5px;
            color: rgb(25, 25, 25) !important;
          ">
          <strong style="margin: 0px; color: rgb(25, 25, 25) !important"
            >Endereço: </strong
          >${secretFriend.address}
        </p>
        <p
          style="
            margin: 0px 0px 5px;
            color: rgb(25, 25, 25) !important;
          ">
          <strong style="margin: 0px; color: rgb(25, 25, 25) !important">
            Times do coração: </strong
          >${secretFriend.teams}
        </p>
        <p
          style="
            margin: 0px 0px 5px;
            color: rgb(25, 25, 25) !important;
          ">
          <strong style="margin: 0px; color: rgb(25, 25, 25) !important"
            >Dados de ajuda e preferencias: </strong
          >${secretFriend.helpContact}
        </p>
      </td>
    </tr>
  </tbody>
</table>

  `
}
