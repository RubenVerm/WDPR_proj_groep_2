using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyApp.Migrations
{
    /// <inheritdoc />
    public partial class databaseUpdatev2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BandMember_Bands_BandId",
                table: "BandMember");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BandMember",
                table: "BandMember");

            migrationBuilder.RenameTable(
                name: "BandMember",
                newName: "BandMembers");

            migrationBuilder.RenameIndex(
                name: "IX_BandMember_BandId",
                table: "BandMembers",
                newName: "IX_BandMembers_BandId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BandMembers",
                table: "BandMembers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_BandMembers_Bands_BandId",
                table: "BandMembers",
                column: "BandId",
                principalTable: "Bands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BandMembers_Bands_BandId",
                table: "BandMembers");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BandMembers",
                table: "BandMembers");

            migrationBuilder.RenameTable(
                name: "BandMembers",
                newName: "BandMember");

            migrationBuilder.RenameIndex(
                name: "IX_BandMembers_BandId",
                table: "BandMember",
                newName: "IX_BandMember_BandId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BandMember",
                table: "BandMember",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_BandMember_Bands_BandId",
                table: "BandMember",
                column: "BandId",
                principalTable: "Bands",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
