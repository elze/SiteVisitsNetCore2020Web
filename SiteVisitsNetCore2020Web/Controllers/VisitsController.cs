using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SiteVisitsNetCore2020Web.Data;
using SiteVisitsNetCore2020Web.Exceptions;
using SiteVisitsNetCore2020Web.Models;
using SiteVisitsNetCore2020Web.Services;
using SiteVisitsNetCore2020Web.ViewModels;

namespace SiteVisitsNetCore2020Web.Controllers
{
    //[Route("visitsnc3ng/api/[controller]")]
    [ApiExceptionFilter]
    [Route("api/[controller]")]
    [ApiController]
    public class VisitsController : ControllerBase
    {
        private readonly SiteVisitsNetCore2020WebContext _context;
        private readonly IVisitsService _visitsService;

        public VisitsController(SiteVisitsNetCore2020WebContext context, IVisitsService visitsService)
        {
            _context = context;
            _visitsService = visitsService;
        }

        [HttpGet]
        public async Task<ActionResult<List<VisitFlat>>> GetFlatVisits()
        {
            var flatVisits = await _visitsService.GetFlatVisits();
            return Ok(flatVisits);
        }

        // GET: api/Visits/sessionvisits/5
        [HttpGet("sessionvisits/{id}")]
        public async Task<ActionResult<List<VisitSessionBlock>>> GetVisitSessionOneLevelGrouping(Guid id)
        {
            var visit = await _context.Visit.Include(v => v.IpAddress)
                .FirstOrDefaultAsync(v => v.Id == id);

            if (visit == null)
            {
                return NotFound();
            }
            List<VisitSessionBlock> sessionVisits = await _visitsService.GetVisitSessionByDeviceAndBrowserPair(visit);
            return Ok(sessionVisits);
        }

        [HttpGet("visitspage/{pageNum}/{pageSize}")]
        public async Task<ActionResult<PaginatedFlatVisitsResult>> GetVisitsPage(int pageNum, int pageSize)
        {
            var flatVisits = await _visitsService.GetFlatVisitsPage(pageNum, pageSize);
            return Ok(flatVisits);
        }

        // GET: api/Visits/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Visit>> GetVisit(Guid id)
        {
            var visit = await _context.Visit.FindAsync(id);

            if (visit == null)
            {
                return NotFound();
            }

            return visit;
        }

        // PUT: api/Visits/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVisit(Guid id, Visit visit)
        {
            if (id != visit.Id)
            {
                return BadRequest();
            }

            _context.Entry(visit).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VisitExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Visits
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Visit>> PostVisit(Visit visit)
        {
            _context.Visit.Add(visit);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVisit", new { id = visit.Id }, visit);
        }

        // DELETE: api/Visits/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Visit>> DeleteVisit(Guid id)
        {
            var visit = await _context.Visit.FindAsync(id);
            if (visit == null)
            {
                return NotFound();
            }

            _context.Visit.Remove(visit);
            await _context.SaveChangesAsync();

            return visit;
        }

        private bool VisitExists(Guid id)
        {
            return _context.Visit.Any(e => e.Id == id);
        }
    }
}
