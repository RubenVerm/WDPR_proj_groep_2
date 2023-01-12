using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyApp.Migrations
{
    /// <inheritdoc />
    public partial class shows2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shows_Halls_HalldId",
                table: "Shows");

            migrationBuilder.RenameColumn(
                name: "HalldId",
                table: "Shows",
                newName: "HallId");

            migrationBuilder.RenameIndex(
                name: "IX_Shows_HalldId",
                table: "Shows",
                newName: "IX_Shows_HallId");

            migrationBuilder.AddForeignKey(
                name: "FK_Shows_Halls_HallId",
                table: "Shows",
                column: "HallId",
                principalTable: "Halls",
                principalColumn: "HalldId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Shows_Halls_HallId",
                table: "Shows");

            migrationBuilder.RenameColumn(
                name: "HallId",
                table: "Shows",
                newName: "HalldId");

            migrationBuilder.RenameIndex(
                name: "IX_Shows_HallId",
                table: "Shows",
                newName: "IX_Shows_HalldId");

            migrationBuilder.AddForeignKey(
                name: "FK_Shows_Halls_HalldId",
                table: "Shows",
                column: "HalldId",
                principalTable: "Halls",
                principalColumn: "HalldId");
        }
    }
}
